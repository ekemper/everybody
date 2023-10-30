'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactComponentElement, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Post, VolumeRating, DifficultyRating } from './postTypes'

// const getGeolocation = () => {
//     console.error("Geolocation needs implementation");
//     return "" //as Geolocation
// }

interface InputContainerProps {
    labelText: string;
    children: React.ReactNode;
}

const InputContainer: FC<InputContainerProps> = ({ labelText, children }) => {
    return (
        <div className="mb-3">
            <label className="form-label uppercase small">{labelText}</label>
            {children}
        </div>
    )
}

const CreatePost: FC = () => {
    const newPostTemplate: Post = {
        userId: '', // TODO: create context for user
        datetime: Date.now().toString(),
        feelings: '',
        geolocation: '',//getGeolocation(),
        location: '',
        duration: 5,
        volume: VolumeRating.MEDIUM,
        color: '',
        consistency: '',
        difficulty: DifficultyRating.RELAXED,
        doorOpen: false,
    };
    const [newPost, setNewPost] = useState(newPostTemplate);
   
    const handleSelectChange = (event: any) => {
        const target = event.target
        debugger
    }

    return (
        <div className='p-4 max-w-md mx-auto'>
            <h1 className='flex justify-end mb-4 mr-2 ml-2 text-2xl'>Create A New Post</h1>

            <InputContainer labelText={'Your Feelings'}>
                <textarea className="form-control" id="exampleFormControlTextarea1">
                    {newPost.feelings}
                </textarea>
            </InputContainer>

            <InputContainer labelText={'Location'}>
                <input
                    type="text"
                    className="form-control mb-3"
                    aria-describedby="location text"
                    placeholder="home, office, disneyland..."
                    value={newPost.location} />
            </InputContainer>

            <InputContainer labelText={'Color'}>
                <input
                    type="text"
                    className="form-control mb-3"
                    aria-describedby="color text"
                    placeholder="use your imagination..."
                    value={newPost.color} />
            </InputContainer>

            <InputContainer labelText={'Volume'}>
                <select id='volume' className="form-select mb-3" aria-label="Volume Select" onChange={handleSelectChange}>
                    <option value="5">{VolumeRating.ENORMOUS}</option>
                    <option value="4">{VolumeRating.LARGE}</option>
                    <option value="3" selected>{VolumeRating.MEDIUM}</option>
                    <option value="2">{VolumeRating.SMALL}</option>
                    <option value="1">{VolumeRating.HIGHLY_THEORETICAL}</option>
                </select>
            </InputContainer>

            <InputContainer labelText={'Difficulty'}>
                <select id='difficulty' className="form-select mb-3" aria-label="Difficulty Select" onChange={handleSelectChange}>
                    <option value="5">{DifficultyRating.EXPLOSIVE}</option>
                    <option value="4">{DifficultyRating.EAGER}</option>
                    <option value="3" selected>{DifficultyRating.RELAXED}</option>
                    <option value="2">{DifficultyRating.STRENUOUS}</option>
                    <option value="1">{DifficultyRating.IMMOVABLE}</option>
                </select>
            </InputContainer>

            <InputContainer labelText={'Consistency'}>
                <select id='consistency' className="form-select mb-3" aria-label="Consistency Select" onChange={handleSelectChange}>
                    <option value="5">{DifficultyRating.EXPLOSIVE}</option>
                    <option value="4">{DifficultyRating.EAGER}</option>
                    <option value="3" selected>{DifficultyRating.RELAXED}</option>
                    <option value="2">{DifficultyRating.STRENUOUS}</option>
                    <option value="1">{DifficultyRating.IMMOVABLE}</option>
                </select>
            </InputContainer>

            <InputContainer labelText={'Door Open'}>
            <input 
                className="form-check-input mt-0" 
                type="checkbox" 
                checked={newPost.doorOpen} 
                aria-label="Door open Checkbox"/>
            </InputContainer>


        </div >
    )
}

export default CreatePost;