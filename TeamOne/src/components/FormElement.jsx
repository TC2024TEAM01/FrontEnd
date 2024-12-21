

// eslint-disable-next-line react/prop-types
export default function FormElement({label, type, name, onChange}) {
    return (
        <div style={{
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'flex-start',
            // margin: '10px',
        }}>
            <label>{label}</label>
          
          <input type={type} name={name} onChange={onChange} style={{width: '100%', padding: '5px'}}/>
        </div>
    )
}