// import React, {Component} from 'react';
//
// const Link = ({
//     active,
//     children,
//     onClick
// }) => {
//     if(active){
//         return <span>{children}</span>;
//     }
//     return (
//         <a href='#'
//            onClick={e => {
//                e.preventDefault();
//                /*  a 태그의 경우, onclick 이벤트후 기본동작인 href 이벤트가 호출이된다.
//                 그래서 onclick과 href가 둘다 호출되어 버리는 문제점이 발생한다.
//                 이 때, onclick에서 preventDefault를 호출하게 되면, 다음 이벤트는 모두 무시가 되기 때문에 의도한대로 동작하게 된다. */
//                onClick();
//            }}
//         >
//             {children}
//         </a>
//     );
// };
//
// class FilterLink extends Component {
//     componentWillMount(){
//         this.subscribe = store.subscribe(() =>
//         this.forceUpdate()
//         );
//     }
//     componentWillUnmount(){
//         this.unsubscribe();
//     }
//     render(){
//         const props = this.props;
//         const state = store.getState();
//         return(
//             <Link
//                 active={
//                     props.filter === state.visibilityFilter
//                 }
//                 onClick={() =>
//                 store.dispatch({
//                     type: 'SET_VISIBILITY_FILTER',
//                     filter: props.filter
//                 })
//                 }
//             >
//                 {props.children}
//             </Link>
//         );
//     }
// }
//
// const Footer = () => (
//     <p>
//         Show:
//         {' '}
//         <FilterLink
//             filter='SHOW_ALL'
//         >
//             All
//         </FilterLink>
//         {', '}
//         <FilterLink
//             filter='SHOW_ACTIVE'
//         >
//             Active
//         </FilterLink>
//         {', '}
//         <FilterLink
//             filter='SHOW_COMPLETE'
//         >
//             Completed
//         </FilterLink>
//     </p>
// );
//
// export default Footer;