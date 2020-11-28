import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../CSS/Categories.module.css"
import { pageInfo } from '../../Functions/PageInfo'
import { subCategory } from '../../Functions/SubCategory'
import {Helmet} from "react-helmet"

function ItemCategories (category_val){

    return subCategory
    .filter(y => category_val === y.category)
    .map(x => {
        return (
            <React.Fragment key={x.id}>
                <Link to={`/${category_val}/${x.title}`}>
                    <div className={styles.box}>
                        <img src={x.imgSrc()} alt={x.title} />
                        <p>{x.title}</p>
                    </div>
                </Link>
            </React.Fragment>
        )
    }
    
    )
}

const ShoesGender = (category, gender) =>{
    return subCategory
    .filter(y => category === y.category && gender === y.gender)
    .map(x => {
        return (
            <React.Fragment key={x.id}>
                <Link to={`/${category}/${x.title}`}>
                    <div className={styles.box}>
                        <img src={x.imgSrc()} alt={x.title} />
                        <p>{x.title}</p>
                    </div>
                </Link>
            </React.Fragment>
        )
    })
}

function Category({match}) {

    const [{title, bgImgSrc, subTitle}] = pageInfo.filter(x=>x.title === match.params.category)
    
    return (
        <>
        <Helmet>
          <title>{`${title} | CaribeStore`}</title>
        </Helmet>
        
        <section className={styles.img_bar} style={{backgroundImage: `url(${bgImgSrc()})`}}>
            <h1>{title}</h1>
            <h3>{subTitle}</h3>
        </section>
    
        <div className="categorySect">
            <div className={styles.header}>
                <i className="fa fa-bars"></i><p>{title} Category</p>
            </div>

            {/* Only appears for the Shoes section otherwise things will appear normally*/}
            {
                (match.params.category!=="Shoes")?(
                    <div className="categories">
                        {ItemCategories(match.params.category)}
                    </div>
                ):(
                    <>
                    <h1 className={styles.title}>Men</h1> 
                    <div className="categories">
                        {ShoesGender(match.params.category, "Male")}
                    </div>

                    <h1 className={styles.title}>Women</h1>
                    
                    <div className="categories">
                        {ShoesGender(match.params.category, "Female")}
                    </div>
                    </>
                )
            }
            
        </div>
        
        </>
    )
}

export default Category
