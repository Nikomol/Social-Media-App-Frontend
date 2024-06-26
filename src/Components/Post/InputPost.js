import "../Post/InputPost.css"
import Profile from "../../assets/profile.jpg"
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import { FaSmile } from "react-icons/fa"



const InputPost = ({ handleSubmit,
  setBody,
  body,
  images,
  setImages
}) => {

  return (
    <div className="i-form">
      <form onSubmit={handleSubmit}>
        <div className="i-input-box">
          <img src={Profile} className='i-img' />

          <input
            type="text"
            id="i-input"
            placeholder="Напиши пост!"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="file-upload">
          <div className="file-icons">
            <label htmlFor="file" className="pv-upload">
              <PhotoLibraryIcon className="input-svg" style={{ fontSize: "38px", color: "#ff9800" }} />
              <span className='photo-dis'>Фото</span>
            </label>


            <label htmlFor="file" className="pv-upload">
              <PlayCircleFilledOutlinedIcon className="input-svg" style={{ fontSize: "38px", color: "black" }} />
              <span className='photo-dis'>Видео</span>
            </label>

            <label htmlFor="file" className="pv-upload">
              <KeyboardVoiceRoundedIcon className="input-svg" style={{ fontSize: "38px", color: "green" }} />
              <span className='photo-dis'>Аудио</span>
            </label>

          </div>

          <button type='submit'>Поделится</button>

        </div>

        <div style={{ display: "none" }} >
          <input
            type="file"
            id="file"
            accept=".png,jpeg,.jpg"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </div>

        {images && (
          <div className="displayImg">
            <CloseRoundedIcon onClick={() => setImages(null)} />
            <img src={URL.createObjectURL(images)} alt="" />
          </div>
        )}

      </form>
    </div>
  )
}

export default InputPost