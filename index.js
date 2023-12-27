async function show() {
    let username = document.getElementById("nm").value;
    let bio = document.getElementById("bio");
    let login = document.getElementById("login");
    let followers = document.getElementById("followers");
    let following = document.getElementById("following");
    let repo = document.getElementById("repo");
    let twitter = document.getElementById("tw");
    let location = document.getElementById("loc");
    let image = document.getElementById("im");
    let card=document.querySelector('.card');

    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    const userData = await response.json();

    if (userData) {
      console.log(userData);
      card.style.display="block";
      image.setAttribute("src", `${userData.avatar_url}`);
      login.innerHTML = `${userData.name}`;
      bio.innerHTML = `${userData.bio}`;
      followers.innerHTML = `Followers:${userData.followers}`;
      following.innerHTML = `Following:${userData.following}`;
      repo.innerHTML = `Repositories:${userData.public_repos}`;
      twitter.innerHTML = `Twitter:${userData.twitter_username}`;
      location.innerHTML = `Location:${userData.location}`;
    }

}