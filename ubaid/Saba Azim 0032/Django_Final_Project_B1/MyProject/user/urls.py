from django.urls import path
from . import views
urlpatterns=[
    path('',views.index),
    path('home/',views.index),
    path('about/',views.about),
    path('contact/',views.contact),
    path('faqs/',views.faqs),
    path('register/',views.register),
    path('service/',views.service),
    path('login/',views.login),
    path('logout/',views.logout),
    path('allservices/',views.allservices),
    path('profile/',views.profile),
    path('booking/',views.booking),
    path('bookinghistory/', views.bookinghistory),
]
