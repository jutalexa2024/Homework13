import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";

const CandidateSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<Candidate | null>(null);;

  // Fetch random users on mount and set the first user's data
  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const users = await searchGithub(); // Fetch a list of random users
        if (users.length > 0) {
          const firstUser = users[0].login; // Get the first user
          setUsername(firstUser); // Prefill the input field
          const userData = await searchGithubUser(firstUser); // Fetch the user's details
          setUserData(userData); // Set the user data
        }
      } catch (error) {
        console.error("Error fetching random users:", error);
      }
    };

    fetchRandomUsers();
  }, []);

  const handleSearch = async () => {
    if (!username) return;
    try {
      const data = await searchGithubUser(username);
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white p-2">
        Search
      </button>

      {userData && userData.login && (
        <div className="mt-4">
          <h2>{userData.name || userData.login}</h2>
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full" />
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;

