import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="page-wrapper animate-in" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--secondary)',
      paddingTop: '0' 
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '440px', 
        backgroundColor: 'white', 
        padding: '60px 50px', 
        borderRadius: '2px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '10px' }}>NEXTJOURNEY</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Please enter your details to sign in.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
          <button className="btn-secondary" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '12px',
            width: '100%',
            backgroundColor: 'white',
            borderColor: '#e5e5e5',
            fontSize: '13px',
            textTransform: 'none',
            letterSpacing: '0'
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.859-3.048.859-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.399 2.013.957 4.962l3.007 2.332c.708-2.127 2.692-3.714 5.036-3.714z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
          
          <button className="btn-secondary" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '12px',
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'black',
            fontSize: '13px',
            textTransform: 'none',
            letterSpacing: '0'
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.288 9.53a3.52 3.52 0 0 1 1.638-2.91 3.557 3.557 0 0 0-2.795-1.51c-1.184-.131-2.335.71-2.936.71-.611 0-1.564-.702-2.553-.683a3.69 3.69 0 0 0-3.111 1.884c-1.344 2.316-.341 5.72 1.01 7.684.66.945 1.45 2.008 2.457 1.972.966-.037 1.332-.622 2.503-.622 1.161 0 1.5.622 2.522.604 1.042-.019 1.724-.954 2.355-1.896.732-1.066 1.033-2.098 1.05-2.148-.024-.01-2.031-.775-2.14-3.085zM11.97 3.53a3.393 3.393 0 0 0 .79-2.421 3.424 3.424 0 0 0-2.226 1.144 3.23 3.23 0 0 0-.825 2.332 2.858 2.858 0 0 0 2.261-1.055z" fill="white"/>
            </svg>
            Sign in with Apple
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>OR EMAIL</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-color)' }}></div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
              <a href="#" style={{ fontSize: '11px', textDecoration: 'underline' }}>Forgot?</a>
            </div>
            <input type="password" className="form-input" placeholder="••••••••" />
          </div>
          
          <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>Sign In</button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '13px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Don't have an account? </span>
          <Link href="/register" style={{ textDecoration: 'underline', fontWeight: 600 }}>Create account</Link>
        </div>
      </div>
    </div>
  );
}
