from django.contrib import admin
from .models import Player, Game, Frame
from django.contrib.auth.models import User


admin.site.register([Player, Game, Frame])
