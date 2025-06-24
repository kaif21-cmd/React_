```jsx
const { Component } = require("react");

class App extends Component{
    constructor(props){
        super(props)
        this.state={
        student:[],
        loading:true,
        error:null
        }
    }
    componentDidMount(){
        const api='https://fakestoreapi.com/products'
        fetch(api)
        .then(response=>{
            if(!response.ok){
                throw new Error('network was not okay')
            }
            return response.json()
        })
        .then(data=>{
            this.setState({
                student:data,
                loading:false,
            })
        })
        .catch(error=>{
            this.setState({
                error:'error in fetching',
                loading:false
            })
            console.log('error in fecthing: ',error)
        })
    }
    render(){
        const {student,loading,error}=this.state;
        return(
            <div>
                {loading && <p>loading..</p>}
                {error && <p>{error}</p>}
                <ul>
                    {student.map(student=>(
                        <li key={student.id}>
                            {student.id}
                            <br>
                            </br>
                            {student.title}
                            <br>
                            </br>
                            {student.price}
                            <br>
                            </br>

                            {student.name}
                            <br>
                            </br>
                            
                            {student.age}
                            
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default App;
```
