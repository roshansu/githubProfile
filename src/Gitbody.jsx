import { useState, useEffect } from "react";

function Body(){

    const [profile, setprofile] = useState([]);
    async function generateProfile() {

        const response = await fetch('https://api.github.com/users?since=1&per_page=10');
        const data = await response.json();
        setprofile(data);
       
    }

    useEffect(()=>{
        generateProfile();
    },[]);

    return(
        <div className="main">
            {
                profile.map(value=>{
                    return(
                        <div className="card" key={value.id}>
                            <img src={value.avatar_url}/>
                            <h1>{value.login}</h1>
                            <a href={value.html_url} target="_blank">View profile</a>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Body;