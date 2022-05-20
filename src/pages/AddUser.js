import React from 'react';
import axios from 'axios';
import Message from '../components/Message';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            occupation: '',
            message: '',
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        axios.post('https://node-hmdyk.onrender.com/user/add-user', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            occupation: this.state.occupation
        })
        .then(res => {
            this.setState({'message': res.data.message})
        })
        .catch(err => {
            console.log(err)
            this.setState({'message': 'Sorry, something went wrong! Please try again later'})
        })
      }


  render() {
     return (
        <div className='container mx-auto p-10'>
            {this.state.message && (
                <Message message={this.state.message}/>
            )}
        <form onSubmit={this.handleSubmit} className='pt-5'>
            <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="first_name" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none" placeholder=" " required onChange={this.handleChange}/>
                    <label htmlFor="first_name" className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10">
                        First name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="last_name" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none" placeholder=" " required onChange={this.handleChange}/>
                    <label htmlFor="last_name" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3">
                        Last name
                    </label>
                </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="email" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none" placeholder=" " required onChange={this.handleChange}/>
                    <label htmlFor="email" className="peer-focus:font-medium text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3">
                        Email
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="occupation" className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none" placeholder=" " required onChange={this.handleChange}/>
                    <label htmlFor="occupation" className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3">
                       Occupation
                    </label>
                </div>
            </div>
            {this.state.first_name && this.state.last_name && this.state.email && this.state.occupation
                ? <button type="submit" value='Submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center float-right">Add User</button>
                : <button type="submit" value='Submit' className="text-white bg-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 float-right" disabled>Add User</button>
            }
            
        </form>
        
        </div>
    );
  }
};

export default AddUser;
