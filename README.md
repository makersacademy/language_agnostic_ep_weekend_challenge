# Instagram #

## Challenge ##
Build Instagram.

### Tech Stack ###
* ASP.NET MVC 5
* C#
* Entity Framework
* Nunit

### Prerequisites ###
* [.NET Core 2.1 SDK](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.1.500-macos-x64-installer)
* PostgreSQL (installed by running `brew install postgresql` in Terminal)

### Specification ###
* Users can post images.
* Users can write comments.
* Users can like an image.
* Users can register an account.
* Users can sign in.
* Users can sign out.

### User Stories ###
```
As a user,
So I can share images with my friends,
I'd like to post images to Instagram.

As a user,
So I can share my opinion,
I'd like to write comments on posted images.

As a user,
So I can quickly show appreciation,
I'd like to like a posted image.

As a user,
So I can keep track of my images, comments, and likes,
I'd like to register for an account.

As a user,
So I can use Instagram,
I'd like to sign in to my account.

As a user,
So I can keep my account safe,
I'd like to sign out of my account.
```

## How to Use ##
1. Clone the repository
```bash
git clone https://github.com/aimeecraig/Instagram.git
```

2. Navigate into the Instagram folder within the repository
```bash
cd Instagram/Instagram
```

3. Run the application
```bash
dotnet run
```

4. Access the program from [https://localhost:5001](https://localhost:5001)

5. Set up the databases using the instructions below

### Setting up the Database ###
1. Navigate to the Instagram folder within the repository
```bash
cd Instagram/Instagram
```

2. Run psql
```bash
psql
```

3. Create the database
```bash
CREATE DATABASE instagram;
```

4. Exit psql using `\q`

5. Run the database migrations
```bash
dotnet ef database update
```

6. Amend the default connection in `./appsettings.json` to use your username
```csharp
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Username=[USERNAME];Database=instagram;"
  }
}
```
