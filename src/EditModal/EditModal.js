import React, {useState} from "react";
import {Box, Button, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import './EditModal.css';

export default function EditModal(props) {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const getAllNotes = () => {
        axios.get(`http://localhost:8080/note/get-all-notes`)
            .then(res => {
                setNotes(res.data);
            })
    }
    const saveNote = () => {
        console.log(title);
        console.log(description);
        axios.post("http://localhost:8080/note/save-note", {
            title: title,
            description: description
        })
            .then((response) => {
                setTitle('');
                setDescription('');
                console.log(response);
                getAllNotes();

            });
    }

    return (
        <div>
            <Modal
                {...props}
                // open={props.open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box className="save-box">
                    <div className="title-dv">
                        <label for="title" className="form-label">Title</label>
                        <input type="text" value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }} className="form-control" id="title"/>
                    </div>
                    <div className="des-dv">
                        <label for="desc" className="form-label">Description</label>
                        <textarea name="desc" value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }} id="desc" rows="3" className="form-control"></textarea>
                    </div>
                    <Button variant="contained" color="secondary" onClick={props.onClose}>CLOSE</Button>
                </Box>
            </Modal>
        </div>
    )
}
