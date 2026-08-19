const Title = ({ txt1, txt2 }) => {
    return (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '1px', background: '#888' }}></div>
                <p style={{ fontSize: '13px', color: '#888', letterSpacing: '0.15em', margin: 0, textTransform: 'uppercase' }}>
                    {txt1}
                </p>
                <div style={{ width: '40px', height: '1px', background: '#888' }}></div>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: '500', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>
                {txt2}
            </h2>
        </div>
    )
}
export default Title