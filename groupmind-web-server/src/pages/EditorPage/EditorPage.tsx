import {TextEditor} from "../../components/TextEditor/TextEditor.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {BASE_URL} from "../../constants.ts";

import "./EditorPage.css"

const SAVE_INTERVAL_MS = 2000;

const EditorPage = () => {

    const {projectId} = useParams();

    const [text, setText] = useState<string>("loading...");

    const [socket, setSocket] = useState<Socket>(io())

    useEffect(() => {
        console.log("connect")
        const s = io(BASE_URL, {
            reconnection: false,
            query: {
                "roomId": projectId,
            }
        })
        setSocket(s);
        console.log("socket set")
        return () => {
            console.log("disconnect")
            s.disconnect();
        }
    }, [projectId])

    useEffect(() => {
        if (projectId !== undefined && socket !== undefined) {
            socket.emit("project_get", {
                "roomId": projectId,
            });
        }
    }, [projectId, socket]);

    useEffect(() => {
        if (socket === undefined || text === "loading...") {
            return;
        }

        const interval = setInterval(() => {
            console.log("project_save", text)
            socket.emit("project_save", {
                "roomId": projectId,
                "content": text,
            })
        }, SAVE_INTERVAL_MS)

        return () => {
            clearInterval(interval)
        };

    }, [projectId, socket, text]);

    const onTextChange = (value: string) => {
        setText(value);
        notifyChange(value)
    }

    const notifyChange = (value: string) => {
        if (socket) {
            console.log("project write", value);
            socket.emit("project_write", {
                "roomId": projectId,
                "content": value,
            })
        }
    }

    useEffect(() => {
        if (socket == null) {
            return;
        }

        const project_read = (data: string) => {
            console.log("project read", data)
            const jsonData = JSON.parse(data);
            setText(jsonData.content);
            // notifyChange(jsonData.content);
        }

        const project_retrieve = (data: string) => {
            console.log("project retrieve", data)
            const jsonData = JSON.parse(data);
            setText(jsonData.content);
            // notifyChange(jsonData.content);
        }

        socket.on("project_read", project_read);
        socket.on("project_retrieved", project_retrieve);

        return () => {
            socket.off("project_read", project_read);
            socket.off("project_retrieved", project_retrieve);
        }

    }, [socket]);

    return (
        <div className="playground">
            <TextEditor name="Text Editor"
                        lang="xml"
                        value={text}
                        handleChange={onTextChange}
            />
        </div>
    )

}

export default EditorPage;