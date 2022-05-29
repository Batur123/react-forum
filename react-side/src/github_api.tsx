import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {LoadHeader} from "./header";

const imageStyleForGithubUsers = {
    width: "25px",
    height: "25px",
}

export const GithubRepos = () => {
    const [posts,setPosts] : any = useState<any>(null);

    useEffect(() => {
        axios.get('https://api.github.com/repositories').then((res) => {
            setPosts(res.data);
        }).catch(() => {
            setPosts(null);
        });
    },[]);

    if(posts === null) {
        return(
           <p>
               Loading repos.
           </p>
        )
    }

    let header = LoadHeader();
    return(
        <>
            <div>
                {header}
            </div>

            <div id="content">
                {posts.map((result : any) => (
                    <div id={result.id}>
                        <img src={result.owner.avatar_url} alt={result.full_name} style={imageStyleForGithubUsers}/> {result.full_name} <br/>
                        {result?.description ? result.description : "No description"}
                        <hr/>
                    </div>
                ))}
            </div>
        </>
    );
}