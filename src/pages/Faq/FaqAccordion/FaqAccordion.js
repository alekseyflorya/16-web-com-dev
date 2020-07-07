import React from "react";
import classes from "./FaqAccordion.module.scss"
import Container from "@material-ui/core/Container";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";

function FaqAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={classes.FaqAccordion}>
      <Container fixed className={classes.Container}>
        <Grid container>
          <Grid item container sm={4} xs={12} alignItems="flex-start">
            <Grid item>
              <h2 className={classes.Headding}>Больше, чем просто работа</h2>
              <p className={classes.Text}>Внезапно, представители современных социальных резервов неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
            </Grid>
          </Grid>
          <Grid item sm={1} xs={12} />
          <Grid item container sm={7} xs={12}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <h3 className={classes.Title}>Сколько стоит создание сайта?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>
                  Единую цену разработки сайта для всех заказчиков устанавливать нецелесообразно, так как потребности у каждого различны. Наши менеджеры сначала проводят консультацию, чтобы определить перечень необходимых вам услуг, и на его основании делают расчет стоимости разработки сайта. Предварительная цена сообщается заказчику перед началом работы. В процессе она может измениться, если вы заказываете дополнительные услуги. Такой индивидуальный подход помогает клиентам сэкономить – оплачивать необходимо только произведенные по факту работы, а не покупать в комплексе требуемые и ненужные.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <h3 className={classes.Title}>С чего начинается процесс создания сайта?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>
                  Первый этап – это всегда планирование. После того, как вы решили заказать создание сайта, нужно определиться с его типом. Наши специалисты способны реализовать проект любой сложности – сделать landing page, интернет-магазин или корпоративный портал, отвечающий потребностям вашего бизнеса. Далее на основе анализа потребностей целевой аудитории и основных конкурентов разрабатывается подробная структура.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <h3 className={classes.Title}>Что входит в создание сайта?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                  <p className={classes.Text}>Мы производим комплекс работ:</p>
                  <ul className={classes.List}>
                    <li className={classes.ListItem}>анализ конкурентов и выявление потребностей клиентов;</li>
                    <li className={classes.ListItem}>подбор оптимального типа сайта;</li>
                    <li className={classes.ListItem}>формирование структуры;</li>
                    <li className={classes.ListItem}>создание макета интернет-ресурса;</li>
                    <li className={classes.ListItem}>проработка дизайна;</li>
                    <li className={classes.ListItem}>подбор графического и текстового контента;</li>
                    <li className={classes.ListItem}>верстку сайта;</li>
                    <li className={classes.ListItem}>back end и front end разработку.</li>
                  </ul>
                  <p className={classes.Text}>Доверив нам разработать сайт под ключ, вы получите отлично работающий интернет-ресурс, способный привлечь множество новых клиентов!</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <h3 className={classes.Title}>Комплексный интернет-маркетинг – что это?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Комплексное продвижение в интернете от нашей компании – это уникальная возможность повысить узнаваемость бренда и увеличить поток клиентов. Мы задействуем весь комплекс эффективных инструментов – от контекстной и таргетированной рекламы до SEO-оптимизации ресурса, чтобы вывести ваш ресурс на лидирующие позиции поисковых систем.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <h3 className={classes.Title}>Как происходит SEO-продвижение?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Оптимизация сайта в поисковой сети или SEO проходит в несколько этапов:</p>
                <ol className={classes.NumerableList}>
                  <li className={classes.ListItem}>Делается аналитика поисковой выдачи.</li>
                  <li className={classes.ListItem}>Производится мониторинг сайтов конкурентов.</li>
                  <li className={classes.ListItem}>Формируется SEO-ядро – ключевые фразы, по которым клиенты ищут интересующие услуги и товары.</li>
                  <li className={classes.ListItem}>Прорабатывается перелинковка страниц ресурса.</li>
                  <li className={classes.ListItem}>Оптимизируется существующий контент или добавляется новый.</li>
                </ol>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <h3 className={classes.Title}>Что такое контекстная реклама?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Контекстная реклама – это объявления, появляющиеся на странице в поисковой системе после введения клиентом запроса. Важно, чтобы реклама была релевантной, отвечала на запросы пользователя и выглядела привлекательно. Поэтому стоит доверить настройку и ведение контекстной рекламы профессионалам, которые проведут эффективную рекламную кампанию любого продукта.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
              >
                <h3 className={classes.Title}>Что такое SMM продвижение?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Эффективные площадки для продаж в интернете – социальные сети. Но для привлечения клиентов мало создать страничку продукта. Нужно организовать продвижение через социальные сети, известное как SMM-маркетинг. Оно заключается в разработке портрета предлагаемого продукта, подборе подходящего и привлекающего внимание контента и организации рекламной компании.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
              >
                <h3 className={classes.Title}>Что такое email-маркетинг?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Лучший способ заинтересовать клиента – пообщаться с ним. Мы предлагаем сделать это через электронную почту и готовы взять на себя организацию email-рассылки. Специалисты не просто составят текст писем и отправят их адресату, но проведут комплексную работу по исследованию аудитории. Это поможет вашей компании привлечь новых клиентов и получить еще больше прибыли.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel9bh-content"
                id="panel9bh-header"
              >
                <h3 className={classes.Title}>Для чего нужен веб дизайн?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Внешний вид интернет-страницы – первое, на что обращают внимание его посетители. Чтобы люди надолго задержались на вашем ресурсе, мы разработаем привлекательный и одновременно эффектный дизайн для сайта. Ведь чем больше времени клиент проведет на странице, тем выше вероятность, что он сделает покупку!</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel10bh-content"
                id="panel10bh-header"
              >
                <h3 className={classes.Title}>Сколько стоит веб-дизайн?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Цены на веб-дизайн зависят от множества факторов, но в первую очередь от сложности и объема работ. Покажите интернет-страницу вашего бизнеса нашим дизайнерам, и мы рассчитаем для вас индивидуальную стоимость работ. Не ориентируйтесь на «усредненные» цены, лучше сразу узнайте конкретную стоимость услуг профессионалов для вашего сайта!</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel11bh-content"
                id="panel11bh-header"
              >
                <h3 className={classes.Title}>Что такое брендинг?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Разработка бренда – это не только создание логотипа и подбор красивого шрифта для названия компании. Это особая стратегия продвижения бизнеса, включающая в себя формирование ассоциаций и мнения людей при помощи различных инструментов, создания фирменного стиля и имиджа компании. Придайте индивидуальность образу вашей компании вместе с нами!</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel12bh-content"
                id="panel12bh-header"
              >
                <h3 className={classes.Title}>Сколько стоит брендинг?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>При заказе брендинга цена зависит от потребностей конкретного клиента. Для определения цены требуется проконсультироваться с нашими специалистами и определить предполагаемый фронт работ. Мы можем провести полноценную медиакомпанию по созданию имиджа фирмы, либо ограничиться созданием логотипа - все зависит только от пожеланий заказчика!</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel13bh-content"
                id="panel13bh-header"
              >
                <h3 className={classes.Title}>Что такое предметная съемка?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>При проведении рекламной компании продукта или создании посвященного ему сайта не обойтись без изображений предлагаемого товара. Представить последний с выгодной стороны поможет предметная фотосессия, выполненная профессионалами. Она позволяет получить подчеркивающие достоинства продукта фото, которые обязательно привлекут внимание потенциальных клиентов.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel14bh-content"
                id="panel14bh-header"
              >
                <h3 className={classes.Title}>Сколько стоит предметная съемка?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Цена рассчитывается индивидуально и зависит от требуемого количества изображений, типа предметов, а также необходимости проведения обработки готовых снимков. Поэтому узнать стоимость предметной фотосъемки до ознакомления специалистов с продукцией сложно. Но можно узнать точную цену сразу во время консультации с нашими менеджерами.</p>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} classes={{root: classes.Accordion}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel15bh-content"
                id="panel15bh-header"
              >
                <h3 className={classes.Title}>Что такое QA тестирование?</h3>
              </AccordionSummary>
              <AccordionDetails classes={{root: classes.AccordionDetails}}>
                <p className={classes.Text}>Если сайт долго загружается или неправильно отображается контент – это отпугнет клиента еще на этапе знакомства с продуктом. Чтобы избавиться от проблем и предотвратить появление новых, проводят особую проверку – тест сайта на ошибки. С его помощью можно оценить мобильность и функциональность ресурса, а затем настроить интернет-страницу и сделать ее более удобной для клиента.</p>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default FaqAccordion