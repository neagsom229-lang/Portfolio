export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Chheang Samnang. All rights reserved.</p>
        <div className="credits">Built with React &amp; Vite</div>
      </div>
    </footer>
  );
}
