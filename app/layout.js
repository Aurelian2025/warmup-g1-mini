export const metadata = {
  title: 'WarmUp G1 (mini)',
  description: 'Smallest working build'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'system-ui',margin:0,padding:24,background:'#fff9f3',color:'#1f2937'}}>
        <div style={{maxWidth:960,margin:'0 auto'}}>{children}</div>
      </body>
    </html>
  );
}
