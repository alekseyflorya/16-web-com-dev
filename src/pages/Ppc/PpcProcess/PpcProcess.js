import React from "react";
import classes from './PpcProcess.module.scss';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function PpcProcess() {
  return (
    <>
      <section className={classes.PpcProcess}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item sm={7}>
              <h2 className={classes.Headding}>PPC – настройка контекстной рекламы</h2>
            </Grid>
            <Grid item sm={5}>
              <p className={classes.HeaddingText}>Предлагаем помощь наших специалистов по настройке контекстной рекламы – это позволит привлечь на сайт заинтересованных посетителей, которые с высокой вероятностью могут стать вашими клиентами.</p>
            </Grid>
          </Grid>
          <Grid item container sm={12} className={classes.PpcProcessList}>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Контекстная реклама</h3>
                <p className={classes.Text}>Настройка контекстной рекламы в Google приводит к тому, что сервис анализирует активность конкретного человека в сети и выдаёт в результатах поиска объявления и рекламные ролики, соответствующие его последним запросам.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Баннерная реклама</h3>
                <p className={classes.Text}>Настройка баннерной рекламы Google Ads позволяет представить ваш бренд на сайтах, которые входят в состав Google. При этом можно выбрать показ баннеров на ресурсах, которые соответствуют тем или иным ключевым словам, пользователям с определёнными интересами, указанной аудитории и т.п.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Медийная реклама</h3>
                <p className={classes.Text}>Google имеет свою контекстно-медийную сеть, состоящую более чем из 2 миллионов сайтов и приложений – все они используются в качестве площадок для размещения рекламы. Контекстно-медийная реклама в сети Google – это реальный шанс привлечь аудиторию.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Поисковый ремаркетинг</h3>
                <p className={classes.Text}>Поисковый ремаркетинг Google Ads охватывает тех пользователей, которые уже побывали на вашем сайте – используя специальные настройки, можно снова показать им вашу рекламу, чтобы напомнить о бренде или предлагаемом продукте.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Таргетированная реклама</h3>
                <p className={classes.Text}>Таргетированная реклама Google транслируется целевой аудитории в социальных сетях. От контекстной она отличается тем, что использует для определения пользователей не поисковые запросы, а данные из профилей и других общедоступных источников.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Ретаргетинг</h3>
                <p className={classes.Text}>Настройка ретаргетинга позволяет снова обратиться к тем пользователям. которые уже посещали ваш ресурс – по сути, это тот же ремаркетинг, но использующий в качестве основного инструмента не Google AdWords, а Яндекс.Директ.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Google Shopping</h3>
                <p className={classes.Text}>Можно использовать настройку товарной рекламы, чтобы ваши товары появлялись в результатах поиска у потенциальных покупателей, которые хотят сравнить ассортимент и цены разных интернет-магазинов, не заходя на их сайты.</p>
              </div>
            </Grid>
            <Grid item sm={6} className={classes.Card}>
              <div className={classes.Item}>
                <h3 className={classes.Title}>Аудит контекстной рекламы</h3>
                <p className={classes.Text}>Аудит рекламной компании позволяет определить её качество и эффективность – это оптимальный способ обнаружить недоработки в настройках рекламных кампаний, запущенных в Google Ads и Яндекс Директ.</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.PpcResult}>
        <Container fixed className={classes.Container}>
          <Grid container>
            <Grid item sm={10}>
              <h2 className={classes.Headding}>Настройка контекстной рекламы под ключ – гарантия успешного результата</h2>
            </Grid>
            <Grid item sm={6}>
              <p className={classes.HeaddingText}>Заказать настройку контекстной рекламы у профессионалов всегда выгоднее, чем пытаться реализовать кампанию самостоятельно – специалисты веб-студии 16.web решат эту задачу в кратчайшие сроки и с максимально высоким КПД.</p>
            </Grid>
            <Grid item sm={6}>
              <p className={classes.HeaddingText}>Профессиональная настройка контекстной рекламы позволит быстро и эффективно решить задачи по привлечению заинтересованных покупателей, не прибегая к неоправданным финансовым тратам.</p>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default PpcProcess