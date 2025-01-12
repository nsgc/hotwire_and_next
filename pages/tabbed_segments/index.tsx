// https://tailwindui.com/components/marketing/sections/cta-sections#component-25ce2a81d17545994655ccc4062651a4
import Link from "next/link";
import Tabs from "@/components/Tabs";
import {useState} from "react";
import Users from "@/components/tabbed_segments/Users";
import Products from "@/components/tabbed_segments/Products";
import Layout from "@/components/Layout";

export default function TabbedSegmentsIndexPage() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  return (
    <Layout>
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="demo-h1">
              タブメニューUI
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/api/hotwire/tabbed_segments_no_js"
                 className="btn-outline-primary">
                Javascriptなし</a>
              <a href="/api/hotwire/tabbed_segments_turbodrive"
                 className="btn-outline-primary">
                Turbo Drive</a>
              <a href="/api/hotwire/tabbed_segments_turboframes"
                 className="btn-outline-primary">
                Turbo Frames</a>
              <Link href="/tabbed_segments"
                    className="btn-primary">
                Next.js useEffect</Link>
              <Link href="/tabbed_segments_app"
                    className="btn-outline-primary">
                Next.js Parallel routes</Link>
            </div>
            <div className="mt-10">
              <div className="mb-2">
                <label htmlFor="search" className="text-sm mr-2">Search</label>
                <input id="search" type="search" className="border rounded p-1" placeholder="ステート維持確認用"/>
              </div>
              <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Tabs>
              {selectedTab === 0
                ? <Users/>
                : selectedTab === 1
                  ? <Products/>
                  : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
