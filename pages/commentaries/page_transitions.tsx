import {CheckCircleIcon} from '@heroicons/react/20/solid'
import Layout from "@/pages/components/Layout";

export default function PageTransitions() {
  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]
  return (
    <Layout hideTechLabel={true}>
      <div className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-orange-600">Commentary</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page Transitions</h1>
          <p className="mt-6 text-xl leading-8">
            ページ遷移
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <p>
              ウェブの最も基本的でかつ重要な動作とも言えるページの遷移。それだけにUXへのインパクトが大きいものです。
            </p>

            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                      <th scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        タイプ
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        データロード
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        ローダー表示
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        prefetch
                      </th>
                      <th scope="col" className="min-w-28 px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        セキュリティ
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        その他
                      </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr key={1} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        ネイティブ(MPA)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        する
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        しない
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ○
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        JavaScript, CSSは要再読み込み
                      </td>
                    </tr>
                    <tr key={2} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Hotwire (TurboDrive)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        する
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        する
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ○
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        hoverでprefetch
                      </td>
                    </tr>
                    <tr key={3} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next SSG
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        する
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        動的なサイトでは使えないが、参考までに紹介
                      </td>
                    </tr>
                    <tr key={4} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next useEffect
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        後にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        静的な部分まで
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        useEffect内のfetchはprefetchされない
                      </td>
                    </tr>
                    <tr key={5} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next page router SSR
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        しない
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        △ (要DAL)
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        SSRを使うとprefetchしない
                      </td>
                    </tr>
                    <tr key={6} className="even:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                        Next app router Server component
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        先にロード
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        要作成
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        静的な部分まで
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ○
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        dynamic componentを使った場合はloading.jsのところまでprefetch
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              ページ遷移のUX
            </h2>
            <p className="mt-8">
              ネイティブ(MPA)以外はすべてSPA的にページ遷移をします。つまりページ遷移のたびにJavaScript,
              CSSを読み込まないので、ページ切り替えがスムーズになります。
            </p>
            <p className="mt-4">
              ヌルサク感が一番向上するのはprefetchです。リンクが画面に現れた時、もしくは上をホバーした時にリクエストを飛ばすので、事実上の<strong>フライング</strong>です。うまくいくと、ボタンをクリックした時にはもうすでにリンク先はダウンロードされています。
            </p>
            <p className="mt-4">
              Next.jsでuseEffectを使った場合、データをfetchできるのはuseEffectをブラウザが実行したときです。prefetchで時間を稼いでも、その後にデータをfetchするので合計時間を短縮できません。
            </p>
            <p className="mt-4">
              またNext.jsは動的なコンテンツを含むページ(<code>getServerSideProps</code>を使っているか<code>dynamic
              rendering</code>を使っているページ)はprefetchしません。app routerの場合は<code>loading.js</code>まではprefetchしますが、その先はしません。
            </p>
            <p className="mt-4">
              結果として、動的コンテンツの場合はHotwire (TurboDrive)が体感として一番ヌルサクになります。
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              セキュリティ: データ漏洩
            </h2>
            <p className="mt-8">
              ネイティブ(MPA)及ぼHotwireでは、サーバはページに表示するHTML<strong>のみ</strong>をブラウザに送ります。そのため、意図しないデータをブラウザに送ってしまう可能性は低く、データ漏洩のリスクは少ないと言えます。
            </p>
            <p className="mt-4">
              一方でNext.jsの場合はデータ漏洩の可能性があります。</p>
            <p className="mt-4">
              Pages routerの場合は<code>getStaticProps</code>, <code>getServerSideProps</code>の返り値ほぼそのままJSONでブラウザに送られます。またPages
              router, App routerで<code>useEffect</code>等でブラウザからデータを<code>fetch</code>した場合は、APIのJSONがそのままブラウザに送られます。ただしこのデータはブラウザに表示されるとは限らないので、気づかずにデータ漏洩してしまう可能性が高くなります。
            </p>
            <p className="mt-4">
              本デモでは<code>User</code> repositoryが<code>password_digest</code>を返してしまうようにしている上、敢えてセキュリティ対策をしていません。そして実際にどのような問題が起きるかを確認できるようにしています。
            </p>
            <ul className="list-disc ml-6 my-4">
              <li className="list-item">
                ネイティブ画面遷移(MPA)およびHotwire TurboDriveを使っている場合は<code>password_digest</code>は漏洩していません。レスポンスにはHTMLしか含まれないためです。
              </li>
              <li className="list-item">Next.js
                Next.js Pages
                routerのSSGおよびSSRの時は、最初にダウンロードされるHTMLファイル最下部の<code>script</code>タグ中に<code>password_digest</code>が漏洩しています。ここはhydrationに使われるデータで、HTMLにレンダリングされるかどうかに関わらず含まれてしまいます
              </li>
              <li className="list-item">Next.js
                useEffectの時は<code>/api/users</code>からのJSONレスポンスに<code>password_digest</code>が漏洩しています
              </li>
              <li className="list-item">Next.js
                App routerのServer componentを使っている場合は<code>password_digest</code>は漏洩していません。RSC
                payloadはHTMLにレンダリングされる内容しか含まないためです。
              </li>
            </ul>
            <p className="mt-4">
              Next.jsをセキュアにする場合は<code>User</code> repositoryのデータをそのままコンポーネントに渡さず、<a
              href="https://nextjs.org/blog/security-nextjs-server-components-actions#data-access-layer">Data
              Access
              Layer</a>を使ってDTO(Data
              Transfer Object)作成し、権限に応じて必要なデータのみを送ることが奨励されています。このコードの見本も作成しました。
            </p>
            <p className="mt-4">
              ネイティブ画面遷移(MPA)やHotwire TurboDriveを使用するときに比べ、Next.jsはデータ漏洩に神経を使う必要があります。Data Access Layerを入れることが強く推奨されます。またApp routerのServer componentでは漏洩の心配が少なくなりますが、Client componentを使う時はそうではないので、やはりNext.jsは常にData Access Layerを検討するべきでしょう。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
