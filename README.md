### Functionalities

# 1) Login and signup using Firebase

   ![image](https://github.com/vinaya563/movie/assets/91210199/adeef49f-bc66-4d72-80cc-2e0b9e6c448e)
   
   ![image](https://github.com/vinaya563/movie/assets/91210199/879b0df4-cc37-4cf9-bda7-605db050d941)

   # 2) Home page where all the list of movies are displayed
   
   ![image](https://github.com/vinaya563/movie/assets/91210199/aabc5dc5-9189-4653-b295-9c192d6fdbd8)
   
   This pages have a functionality where two eyes one with cancelled and one normal eye are being displayed
   Cancelled eye - If you click on cancelled eye , the movie gets added into ROTTEN ORANGES list which can be accessed through navbar
=Normal eye - If you click on normal eye , the movie gets added into HITS list which can be accessed through navbar

   # 3) Playlist created by the user (Private access)
   
   1 . "Hits" contains all the movies that are being liked by the user . This is being displayed in a different page and if the user wants to remove that movie from the playlist he can remove , by hovering over the movie , an into symbol appears and if the user clickks on it , the movie gets removed.
   This page also has a counter bar that is being displayed that tells , how many movies are being there in the playlist currently
   
   ![image](https://github.com/vinaya563/movie/assets/91210199/5733866d-c553-407f-881b-12469b879c57)

      2 . "Rotten" contains all the movies that are being disliked by the user . This is being displayed in a different page and if the user wants to remove that movie from the playlist he can remove , by hovering over the movie , an into symbol appears and if the user clickks on it , the movie gets removed
         This page also has a counter bar that is being displayed that tells , how many movies are being there in the playlist currently

![image](https://github.com/vinaya563/movie/assets/91210199/09519a98-7a09-461a-9131-f3af612d872a)

# 4) Search Bar with suggestions

This page has a search bar embedded into it , in which if we type any movie , we get suggestions of the movies starting with that particular letters that are being currently placed inside the placeholder.
In the result card of search bar , again we have functionality where we can add certain movies into hits / rotten depending on our choice

![image](https://github.com/vinaya563/movie/assets/91210199/82adbd69-03db-431f-a56a-c94ac7b9a598)

# 5) Playlist being accessed by public user (public access)

The two playlists that are being created are displayed at the landing page which any user can access without the autorisation (signin)
The limitation of this access is that , the public user cannot edit the playlist as the playlist creator can edit, the public user is given only read access
If the public user wants to give feedback he is being prompted to login and change the playlist according to his interests

![image](https://github.com/vinaya563/movie/assets/91210199/abfaf64c-659c-48e0-80b6-8148245af460)

![image](https://github.com/vinaya563/movie/assets/91210199/7290a99e-22e5-4605-b121-a6912e8b5603)

# Tech stack used : REACT.JS , HTML,CSS , Javascript , firebase (for authentiaction)

# The link where the app is being deployed :
https://movie-seven-self.vercel.app/


# Steps to run:

1) Go the website being provided and create the account on your own
2) Instead of login , if yu want to see any list (public lists) you can see them by clicking on the list of your choice , do reember you have only read-access, If you want edit access you must login to website
3) Now login into the website where you will be having a navbar ( movies - list of all movies , hits playlist - all hits created by user , rotten playlist - rotten movies added by user)
4) You will see the bunch of movies in the home page with the poster as well as short description bout movie (title and year of release)
5) Now you can add any movie into any of the playlist by hovering over that partcular movie , when hovered you will be having two eye symbols - cancelled eye(goes to rotten) , normal eye(goes to hits)
6) Now if you want to see rotten /hit playlist (private playlist) you can access them via navbar
7) If you want to remove any movie from the playlist you can remove just be hovering into them when hovered you will see a cancel button , if you click on it , the movie gets deleted from that playlist
8) Search button is there , where you can search any movies and in the result card you can add any movies to the respective playlist of your choice
9) If you want to logout , you can do it through navbar , where again you will be taken into landing page



