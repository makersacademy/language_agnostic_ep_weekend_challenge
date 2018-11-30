from django.db import models
from django.forms import ModelForm

from django.contrib.auth.models import User
import datetime

class Player(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    best_score = models.IntegerField(default=0)
    games_tot = models.IntegerField(default=0)

    def __str__(self):
        return str(self.user_id)

    def getPlayerCat(self):
        if self.games_tot > 10:
            return "Expert"
        elif self.games_tot > 5:
            return "Intermediater"
        else:
            return "Beginner"

class Game(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    game_total_score = models.IntegerField(default=0)
    frames_tot = models.IntegerField(default=0)

    def __str__(self):
        return "%s is playing on %s" % (self.user_id, str(self.date))

    def getCompletion(self):
        if frames_tot == 10:
            return "true"
        else:
            return "false"
# Create the form class.
class GameForm(ModelForm):
    class Meta:
        model = Game
        fields = ['user_id', 'game_total_score', 'frames_tot']

class Frame(models.Model):
    game_id = models.ForeignKey(Game, on_delete=models.CASCADE)
    sequence_no = (
        (1,1),
        (2,2),
        (3,3),
        (4,4),
        (5,5),
        (6,6),
        (7,7),
        (8,8),
        (9,9),
        (10,10),
    )
    roll1_score = models.IntegerField(default=0)
    roll2_score = models.IntegerField(default=0)
    bonus1_score = models.IntegerField(default=0)
    bonus2_score = models.IntegerField(default=0)
    frame_total_score = models.IntegerField(default=0)

    def getFrameCategory(self):
        if roll1_score == 10:
            return "Strike"
        elif roll1_score + roll2_score == 10:
            return "Spare"
        elif roll1_score + roll2_score == 0:
            return "Gutter"
        else:
            return "Regular"

    def getFrameScore(self):
        return roll1_score + roll2_score + bonus1_score + bonus2_score

    def __str__(self):
        return "Frame: "+str(self.sequence_no)
