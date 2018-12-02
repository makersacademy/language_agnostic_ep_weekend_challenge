from django import forms
from django.forms import ModelForm
from bowling.models import Game,Frame

class GameForm(ModelForm):
    class Meta:
        model = Game
        fields = ['user_id', 'game_total_score', 'frames_tot']

class FrameForm(ModelForm):
    class Meta:
        model = Frame
        fields = ['sequence_no','game_id', 'roll1_score', 'roll2_score','bonus1_score','bonus2_score']

class PlayGameForm(forms.Form):
    roll_score = forms.ChoiceField(choices=[(x, x) for x in range(0, 11)])
