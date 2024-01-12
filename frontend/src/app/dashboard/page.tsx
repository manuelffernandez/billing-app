import GetSalesButton from './_components/GetSalesButton'
import PostSalesButton from './_components/PostSaleButton'
import SignOutButton from './_components/SignOutButton'

const DashboardPage = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <GetSalesButton />
      <PostSalesButton />
      <SignOutButton />
    </>
  )
}

export default DashboardPage
