"""letsgobowling URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib.auth.models import User
from django.conf.urls import include
from . import views
from django.conf.urls import include, url
from django.contrib.auth import views as auth_views

app_name = "bowling";
admin.autodiscover()

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/register', views.register, name='register'),


    path('game/new', views.startGame, name ='start_game'),
    path('game/play/<int:game_id>', views.playGame, name ='play_game'),
    path('game/end/<int:game_id>', views.endGame, name ='end_game'),

    path('player/stats', views.showPlayerStats, name ='player_stats'),
    path('app/stats', views.showAppStats, name ='app_stats'),
    
]
