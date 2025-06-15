from django.db.models import Q
from django.db import connection
from django.shortcuts import render
from . models import *
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from datetime import datetime
from django.utils import timezone

# Create your views here.
def index(request):
    data=category.objects.all().order_by('-id')[0:12]
    sdata=service_provider.objects.all().order_by('-discount_price')[0:12]
    md={'cdata':data,'servicedata':sdata}
    return render(request,'index.html',md)
def about(request):
    return render(request,'about.html')
def contact(request):
    md={}
    if request.method=="POST":
        a=request.POST.get('name')
        b=request.POST.get('email')
        c=request.POST.get('mobile')
        d=request.POST.get('msg')
        contactus(Name=a,Email=b,Mobile=c,Message=d).save()
        return HttpResponse("<script>alert('Thanks for contacting with us...');location.href='/contact/';</script>")
        #md={"name":a,"email":b,"mobile":c,"message":d}
    return render(request,'contact.html')
def faqs(request):
    return render(request,'faqs.html')
def register(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        mobile=request.POST.get('mobile')
        password=request.POST.get('password')
        address=request.POST.get('address')
        pincode=request.POST.get('pincode')
        city=request.POST.get('city')
        picture=request.FILES['fu']
        x=tbl_register.objects.all().filter(email=email).count()
        if x==1:
            return HttpResponse("<script>alert('You Are Already Registered');location.href='/register/';</script>")
        else:
            tbl_register(name=name, email=email,mobile=mobile, password=password,address=address, pincode=pincode, city=city, picture=picture).save()
            return HttpResponse("<script>alert('Thanks for registering...');location.href='/register/';</script>")
    return render(request,'register.html')

def service(request):
    sid=request.GET.get('msg')
    sdata=service_provider.objects.all().filter(id=sid)
    services =tbl_service.objects.all().filter(provider_name=sid)
    md={"sdata":sdata}
    return render(request,'service.html',md)
def login(request):
    if request.method=="POST":
        email=request.POST.get('email')
        password=request.POST.get('password')
        x=tbl_register.objects.filter(email=email, password=password)
        if x.count()==1 :
            request.session['name']=str(x[0].name)
            request.session['picture']=str(x[0].picture)
            request.session['email']=str(x[0].email)
            return HttpResponse("<script>alert('You are Welcome...');location.href='/home/';</script>")
        else :
            return HttpResponse("<script>alert('Invalid Credentials');location.href='/home/';</script>")
    return render(request,'login.html')
def logout(request):
    if request.session.get('email'):
        del request.session['email']
        return HttpResponse("<script>alert('You are Logged Out');location.href='/login/';</script>")
    return render(request,'login.html')
def allservices(request):
    cid=request.GET.get('cid')
    searchdata=request.GET.get('search')
    cdata=category.objects.all().order_by('-id')
    data=""
    if cid is not None:
        data=service_provider.objects.all().filter(service_category=cid)
    elif searchdata is not None:
        data=service_provider.objects.all().filter(Q(service_name__icontains=searchdata) | Q(address__icontains=searchdata) | Q(city__icontains=searchdata) | Q(availability__icontains=searchdata) | Q(service_category__category_name__icontains=searchdata))
    else:
         data=service_provider.objects.all().order_by('-id')
    md={"cdata":cdata,"servicedata":data}
    return render(request,'allservices.html',md)
def profile(request):
    if request.method=="POST":
        name=request.POST.get('name')
        email=request.POST.get('email')
        mobile=request.POST.get('mobile')
        password=request.POST.get('password')
        address=request.POST.get('address')
        pincode=request.POST.get('pincode')
        city=request.POST.get('city')
        picture=request.FILES['fu']
        tbl_register(name=name, email=email,mobile=mobile, password=password,address=address, pincode=pincode, city=city, picture=picture).save()
        return HttpResponse("<script>location.href='/profile/';</script>")
    user=request.session.get('email')
    data=tbl_register.objects.all().filter(email=user)
    md={"userinfo":data}
    return render(request,'profile.html',md)
def bookinghistory(request):
    cursor = connection.cursor()
    email=request.session.get('email')
    # cursor.execute("select * from user_tbl_booking left join user_service_provider on user_tbl_booking.providerid=user_service_provider.id where user_tbl_booking.email='"+email+"' order by user_tbl_booking.id desc")
    # rows=cursor.fetchall()
    rows = tbl_booking.objects.all().order_by('reqdate')
    md={"data":rows}
    return render(request,'bookinghistory.html',md)
def booking(request):
    email = request.session.get('email')
    email = get_object_or_404(tbl_register,email=email)
    #print(email)
    if email is not None:
        if request.method=="POST":
            date= request.POST.get('date')
            time = request.POST.get('time')
            detail= request.POST.get('detail')
            address= request.POST.get('address')
            pincode = request.POST.get('pin')
            city= request.POST.get('city')
            payment= request.POST.get('payment')
            now= datetime.today()
            provider_id =request.POST.get('number')
            provider_id = get_object_or_404(service_provider,id= provider_id)
            tbl_booking(providerid=provider_id,email=email,date=now,time=time,detail=detail,address=address,pincode=pincode,payment=payment,city=city,reqdate=date,status="booked").save()
            return HttpResponse("<script>alert('service booked successfully');location.href='/bookinghistory/';</script>")
    else:
       return HttpResponse("<script>alert('you are not login');window.location.href='/login/'</script>")
    return render(request, 'booking.html')

