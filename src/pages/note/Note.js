import React, {useEffect, useState} from "react";
import { Button} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SaveModal from "../../components/SaveModal/SaveModal";
import './Note.css'

function Note() {
    const [notes, setNotes] = useState([]);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const saveNote = (titleP,descriptionP) => {
        console.log(titleP);
        console.log(descriptionP);
         axios.post("http://localhost:8080/note/save-note", {
             title: titleP,
             description: descriptionP
         })
             .then((response) => {

                 console.log(response);
                 handleClose();
                 getAllNotes();

             });
    }
    useEffect(() => {
        getAllNotes();
    }, [])
    const getAllNotes = () => {
        axios.get(`http://localhost:8080/note/get-all-notes`)
            .then(res => {
                setNotes(res.data);
            })
    }
    const deleteNoteById = (id) => {
        try {
            alert(id);
            //      axios.delete(`http://localhost:8080/note/delete-note/${id}`)
            axios.delete(`http://localhost:8080/note/delete-note`, {
                params: {
                    id: id
                }
            })
                .then(res => {
                    console.log('deleted');
                    getAllNotes();
                })


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Button className="add-btn" variant="contained" color="primary" onClick={handleOpen}>Add</Button>
            <SaveModal open={open} onClose={handleClose} onSave={saveNote}/>
            <div className="middle-content">
                {
                    notes.map(items => (
                        <div className="note-item">
                            <Card sx={{width: 250}}>
                                <CardMedia
                                    sx={{height: 140}}
                                    image="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                    title={items.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {items.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {items.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/*<CustomButton/>*/}
                                    <Button size="small" variant="contained">Edit</Button>
                                    <Button size="small" variant="contained"
                                            onClick={() => deleteNoteById(items.id)}>Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
        // <div className="container">
        //     {/*add note*/}
        //     {/*<div className="row justify-content-center">*/}
        //     {/*    <div className="col-md-10">*/}
        //     {/*        <Form className="outer">*/}
        //     {/*           */}
        //     {/*            <div className="mb-3">*/}
        //     {/*                <label for="title" className="form-label">Title</label>*/}
        //     {/*                <input type="text" value={title} onChange={(e) => {*/}
        //     {/*                    setTitle(e.target.value)*/}
        //     {/*                }} className="form-control" id="title"/>*/}
        //     {/*            </div>*/}
        //     {/*            <div className="mb-3">*/}
        //     {/*                <label for="desc" className="form-label">Description</label>*/}
        //     {/*                <textarea name="desc" value={description} onChange={(e) => {*/}
        //     {/*                    setDescription(e.target.value)*/}
        //     {/*                }} id="desc" rows="3" className="form-control"></textarea>*/}
        //     {/*            </div>*/}
        //     {/*            <Button variant="contained" onClick={saveNote}>*/}
        //     {/*                ADD NOTE*/}
        //     {/*            </Button>*/}
        //     {/*        </Form>*/}
        //     {/*    </div>*/}
        //     {/*</div>*/}
    )
}
export default Note;