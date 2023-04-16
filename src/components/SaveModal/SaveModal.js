import React, {useState} from "react";
import {Box, Button, Modal} from "@mui/material";
import axios from "axios";
import './SaveModal.css';

export default function SaveModal(props) {
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
        props.onSave(title,description);
        setTitle('');
        setDescription('');
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
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)
                        }} className="form-control" id="title"/>
                    </div>
                    <div className="des-dv">
                        <label for="desc" className="form-label">Description</label>
                        <textarea name="desc" value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }} id="desc" rows="3" className="form-control"></textarea>
                    </div>
                    <Button className="btn-save" variant="contained" color="primary" onClick={saveNote}>SAVE</Button>
                </Box>
            </Modal>
        </div>
    )
}
