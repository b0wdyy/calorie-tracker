import { NextPage } from 'next'

type JournalDetailPageProps = {
  params: {
    uuid: string
  }
}

const JournalDetailPage: NextPage<JournalDetailPageProps> = () => {
  return <div>from detail page</div>
}

export default JournalDetailPage
