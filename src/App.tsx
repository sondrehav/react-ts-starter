import React from 'react'
import Calculator from '@/components/Calculator'

export default ({}) => {
    return (
        <>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                                                                                                                    <h5 className="my-0 mr-md-auto font-weight-normal">
                                                                                                                        React TS starter
                                                                                                                    </h5>
                <a
                    className="btn btn-outline-primary"
                    href="https://github.com/sondrehav/react-ts-starter"
                >
                    Github
                </a>
            </div>
            <div className={'container'}>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h3 className="lead">
                        Quickly set up your standard boilerplatey web-dev stuff.
                    </h3>
                </div>
                <div className={'p-3'}>
                    <p>
                        This is a generic boilerplate. Libraries and resources
                        used:
                    </p>
                    <ul className={'list-group list-group-flush'}>
                        <li className={'list-group-item'}>
                            Framework:{' '}
                            <a href={'https://reactjs.org/'}>React</a>{' '}
                        </li>
                        <li className={'list-group-item'}>
                            Language:{' '}
                            <a href={'https://www.typescriptlang.org/'}>
                                Typescript
                            </a>
                        </li>
                        <li className={'list-group-item'}>
                            Module bundler:{' '}
                            <a href={'https://webpack.js.org/'}>Webpack 4</a>
                        </li>
                        <li className={'list-group-item'}>
                            Test framework:{' '}
                            <a href={'https://webpack.js.org/'}>Jest</a>
                        </li>
                        <li className={'list-group-item'}>
                            Styling framework:{' '}
                            <a href={'https://getbootstrap.com/'}>Bootstrap</a>
                        </li>
                        <li className={'list-group-item'}>
                            Font:{' '}
                            <a
                                href={
                                    'https://fonts.google.com/specimen/Roboto'
                                }
                            >
                                Roboto
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h3 className="lead">Dummy component:</h3>
                </div>
                <Calculator />
            </div>
        </>
    )
}
