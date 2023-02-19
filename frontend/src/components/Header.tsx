import Aurelius from '../../public/aurelius.png';

const Header: React.FC = (props) => {
  return (
    <div className="header">
      <img id="aurelius" src={Aurelius} alt='Aurelius Nav'/>
      <div id="title">Pocket Full of Quotes</div>
      <div id="quoteAndButton">
        <div id="mainQuote">
          "A classic book is a book that has never finished saying what it has to say"
          <br></br>
          - Italo Calvino
        </div>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Header;