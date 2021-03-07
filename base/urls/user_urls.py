from django.urls import path

from base.views import user_views as views


urlpatterns=[
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.register, name='resgistration'),
    path('profile/',views.getUserProfile,name='Profile'),
    path('',views.getUserProfile,name='users'),
    
]