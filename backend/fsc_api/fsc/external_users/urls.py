from django.urls import path
# from .views import RegisterView, LoginView
from rest_framework_simplejwt import views as jwt_views
from .views import ReceiveMessageView

urlpatterns = [
    path('external_user_message/', ReceiveMessageView.as_view(),
         name='external_user_message')
]
