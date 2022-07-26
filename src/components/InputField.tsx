import './styles.css'
const InputField = () => {
    return (
        <form className="input">
            <input type='input' placeholder='Enter a task' className='input-box' />
            <button className='input-submit'>Go</button>
        </form>
    )
}

export default InputField