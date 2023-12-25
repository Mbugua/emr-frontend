
import React, { useState, useEffect } from "react"
import { getUserDashboard } from "../../services/user.service";
import  EventBus  from "../../common/event-bus";


const UserDashboard: React.FC = () => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        getUserDashboard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setContent(_content);
                if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                }
            }
        );
    }, []);

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
            </div>
    )
}



export default UserDashboard;