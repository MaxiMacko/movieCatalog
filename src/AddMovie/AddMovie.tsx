import React, {useState} from 'react';
import styled from "styled-components";
import {GENRES} from "../helpers/helpers";
import TagsWidget from "./widgets/TagsWidget";

const Image = styled.img`
  width: 10rem;
  height: 230px;
`

const AddMovie = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [actors, setActors] = useState([]);
  const [name, setName] = useState('')


  const addMovieButtonClickHandler = () => {
    console.log({
      name,
      description,
      imageUrl,
      rating,
      actors,
      genres
    })
  }

  return (
    <div>
      <div>
        <div>Name</div>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <div>Description</div>
        <input value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <div>Image</div>
        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        {
          imageUrl && (
            <div>
              <Image src={imageUrl} alt={'avatar'}/>
            </div>
          )
        }
      </div>
      <div>
        <div>Rating</div>
        <input value={rating} onChange={e => setRating(e.target.value)} />
      </div>
      <div>
        <div>Genres</div>
        <select
          multiple
          onChange={e => {
            setGenres(Array.from(e.target.options).filter((option:any) => option.selected).map(option => option.value));
          }}
        >
          {
            GENRES.map(genre =>
              <option value={genre} key={genre}>{genre}</option>
            )
          }
        </select>
      </div>
      <div>
        <div>Actors</div>
        <div>
          <TagsWidget
            actors={actors}
            onChange={(actors:any) => setActors(actors)}
          />
        </div>
      </div>
      <button onClick={addMovieButtonClickHandler}>Add movie</button>
    </div>
  );
}

export default AddMovie