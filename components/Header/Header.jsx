import css from "./Header.module.css"

export default function Header() {
    return (
        <header className={css.header}>

            <div className={css.left}>
                <img className={css.logo_img} src="/logo.png"/>
                <span className={css.logo}> BOOK PLUS</span>
            </div>

            <div className={css.center}>
                <input
                    type="text"
                    placeholder="Encontre sua próxima leitura..."
                    className={css.search}
                />
            </div>

            <div className={css.right}>
                <nav className={css.menu}>
                    <a href="#">Catálogo</a>
                    <a href="#">Lançamentos</a>
                    <a href="#">Mais Vendidos</a>
                </nav>

                <button className={css.button}>
                    Login Admin
                </button>
            </div>

        </header>
    )
}