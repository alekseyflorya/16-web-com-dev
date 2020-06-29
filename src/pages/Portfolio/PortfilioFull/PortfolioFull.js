import React from "react";
import classes from './PortfolioFull.module.scss';
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";
import {ButtonLoadMore} from '../../../components/UI/ButtonLink';
import FullPortfolioData from "../FullPortfolioArray";
import Pagination from "@material-ui/lab/Pagination";

function PortfolioFull() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClick = () => {
    setPage(page + 1);
  };

  const Projects = FullPortfolioData.map(({img, title, type, position}, index) => (
    <div className={`${classes.gridItem} ${position}`} key={index}>
      <div className={classes.HoveredBlock}>
        <Link to='/portfolio'>
          <h3 className={classes.HoveredTitle}>{title}</h3>
          <p className={classes.HoveredType}>{type}</p>
          <div className={classes.HoveredArrow}></div>
        </Link>
      </div>
      <img className={classes.gridImg} src={img} alt={type} title={title}/>
    </div>
  ))

  return (
    <section className={classes.PortfolioFull}>
      <Container fixed className={classes.Container}>
        <div>
          <div className={classes.ProjectsGrid}>
            <div className={classes.gridContainer}>
              {Projects.slice(0, page*6)}
            </div>
          </div>
          <div className={classes.PortfolioFullBtn}>
            {page < Projects.length / 6 &&
            <ButtonLoadMore title={'Загрузить еще'} handleClick={handleClick}/>
            }
          </div>
          <Pagination className={classes.PortfolioFullPaggination} count={Math.ceil(Projects.length / 6)} page={page} onChange={handleChange} />
        </div>
      </Container>
    </section>
  )
}

export default PortfolioFull