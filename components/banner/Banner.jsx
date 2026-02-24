import css from "./Banner.module.css"
import bannerImg from "../../../public/banner.png"

export default function Banner() {
    return (
        <section
            className={css.banner}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className={css.overlay}></div>

            <div className={css.content}>
                <span className={css.tag}>CURADORIA EXCLUSIVA</span>

                <h1>
                    Descubra seu <br />
                    próximo capítulo.
                </h1>

                <p>
                    Mergulhe em histórias que transformam. Explore nossa seleção
                    premium de obras clássicas e contemporâneas.
                </p>

                <div className={css.buttons}>
                    <button className={css.primary}>
                        Explorar Catálogo
                    </button>

                    <button className={css.secondary}>
                        Ver Promoções
                    </button>
                </div>
            </div>
        </section>
    )
}