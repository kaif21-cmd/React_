```jsx
const { useState } = require("react");

const images = [
  "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Red_Kitten_01.jpg/1200px-Red_Kitten_01.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1jmC_VZ8-y6cd6yHohbILQVbjCmlHYygMA&s",
];

const ImageSlider=()=>{
    const [index,setIndex]=useState(0)
    const next=()=>{
        setIndex((prev)=>(prev+1)%images.length)
    }
    const prev=()=>{
        setIndex((prev)=>(prev-1)%images.length)
    }
    return(
        <div>
            <img
            src={images[index]}
            alt='slider'
            style={{ width: "300px", height: "200px", borderRadius: "10px" }}

            />
            <div>
                <button
                onClick={prev}
                >
                -1
                </button>
                <button
                onClick={next}
                >
                +1
                </button>
            </div>
        </div>
    )
}
export default  ImageSlider;
```
