import Link from "next/link";

const index = () => {
  return (
    <>
      <main>
        <h1>CSR vs SSR vs SSG vs ISR</h1>
        <ul>
          <li>
            CSR
            <p>
              Client-side Rendering: <Link href="/csr">go</Link>
            </p>
            <ol>
              <li>nadeel: loading is visueel zichtbaar</li>
              <li>
                nadeel: bij elke klik om een detail op te vragen van een
                cocktail en het opvragen van alle cocktails gebeurd er een
                api-call (fetch) door de client (browser)
              </li>
              <li>
                nadeel: SEO is BAD : google kan de html niet lezen want die is
                er ook niet!!
              </li>
              <li>
                voordeel: dit is volledig Client-Side en kan dus op een
                goedkopen static host worden geplaatst (deployen op surge.)
              </li>
            </ol>
          </li>

          <li>
            SSR
            <p>
              Server-side Rendering: <Link href="/ssr">go</Link>
            </p>
            <ol>
              <li>voordeel : geen gedoe loading...</li>
              <li>voordeel : supersnel</li>
              <li>
                voordeel : voorgegenereerde html kan ingelezen worden door
                google
              </li>
              <li>nadeel : elke pagerequest = een apicall</li>
            </ol>
          </li>

          <li>
            SSG
            <p>
              Static Site Generation: <Link href="/ssg">go</Link>
            </p>
            <ol>
              <li>voordeel: het kan niet sneller!!!!!</li>
              <li>
                voordeel : geen api-calls want data werd opgevraagd on built
                time{" "}
              </li>
              <li>voordeel : seo top</li>
              <li>nadeel : data kan verouderd zijn</li>
              <li>nadeel : nieuwere data niet ter beschikking</li>
            </ol>
          </li>

          <li>
            ISR
            <p>
              Incremental Static Regeneration: <Link href="/isr">go</Link>
            </p>
            <ol>
              <li>200 meest bezochte producten kunnen static renderen</li>
              <li>
                voor nieuwe elementen: alle toekomstige kunnen we mee laten
                genereren on request time
              </li>
              <li>
                revalidate functie zal ervoor zorgen dat we in bepaalde
                timeframe onze data kunnen hernieuwen
              </li>
            </ol>
          </li>
        </ul>
      </main>
    </>
  );
};

export default index;
