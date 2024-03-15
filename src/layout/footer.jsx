function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} не copyright на самом деле / Пушин Алексей
            <a className="grey-text text-lighten-4 right" href="#!">Репозиторий</a>
            </div>
        </div>
        </footer>
}
export { Footer };