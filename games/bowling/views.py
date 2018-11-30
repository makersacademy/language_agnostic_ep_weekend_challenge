from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
    return HttpResponse("Hello, world. Lets go bowling!")

def about(request):
    return render(request, 'bowling/about.html', {'title': 'About'})

@login_required
def playgame(request):
    return render()
