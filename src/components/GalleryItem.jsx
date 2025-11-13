export const GalleryItem = ({ image, name }) => {
  return(
    <div>
        <img src={image} alt={name} />
    </div>
  )
}