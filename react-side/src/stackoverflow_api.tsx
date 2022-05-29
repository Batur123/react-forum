import axios from 'axios';
import React, {useEffect,useState} from 'react';
import {LoadHeader} from "./header";

const imageStyleForGithubUsers = {
    width: "25px",
    height: "25px",
}

export const StackOverflowQuestions = () => {
    const [posts,setPosts] : any = useState<any>(null);

    useEffect(() => {
        axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow').then((res) => {
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

    console.log(posts.items);
    let header = LoadHeader();
    return(
        <>
            <div>
                {header}
            </div>

            <div id="content">
                {posts.items.map((result : any) => (
                    <div id={result.owner.display_name}>
                        <img src={result.owner.profile_image} alt={result.full_name} style={imageStyleForGithubUsers}/> {result.owner.display_name} <br/>
                        Tags: {result.tags.join(",")} <br/>
                        View Count: {result.view_count} <br/>
                        Answer Count: {result.answer_count} <br/>
                        Is Answered: {result.is_answered ? "Yes" : "No"} <br/>
                        Link: {result.link} <br/>
                        {result?.title ? result.title : "No title"}
                        <hr/>
                    </div>
                ))}
            </div>
        </>
    );
}