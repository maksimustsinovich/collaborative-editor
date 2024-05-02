import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../components/Button/Button.tsx";
import Input from "../../components/Input/Input.tsx";

function MainPage() {
    const navigate = useNavigate();

    const [projectId, setProjectId] = useState<string>("");

    const createNewProject = () => {
        navigate("/project/" + uuidv4());
    }

    const openProject = () => {
        if (projectId === "") {
            return;
        }

        navigate("/project/" + clearUrl(projectId));
    }

    const clearUrl = (url: string) => {
        if (url.includes("project/")) {
            return url.split("project/")[1];
        }

        return url;
    }

    return (
        <div className="home-root">
            <div className="home">
                <span className="home-title">COLLABORATIVE EDITOR</span>

                <br/>

                <Button text={"Create new"} onClick={createNewProject} />

                <br/>

                <div className="home-open-project">
                    <Input
                        onChange={(e) => setProjectId(e.target.value)}
                        value={projectId}
                        placeholder={"Project ID or URL"}
                        type={"text"}
                    />
                    <Button text={"Open Project"} onClick={openProject} />
                </div>
            </div>
        </div>
    )
}

export default MainPage;