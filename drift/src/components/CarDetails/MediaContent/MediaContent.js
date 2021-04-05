import './MediaContent.scss';

const MediaContent = ({ picture, model, video }) => {
    return (
        <div className='media-content'>
            <div className='image-wrapper-details'>
                <h2>image</h2>
                <img src={picture} alt={model} className='image-details' />
            </div>
            <div className='image-wrapper-details'>
                <h2>Video for the car</h2>
                <iframe
                    width='420'
                    height='315'
                    src={video}
                    title={model}
                    className='image-details'
                ></iframe>
            </div>
        </div>
    );
};

export default MediaContent;
