import PropTypes from 'prop-types'; 
const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="my-14">
            <p className="text-center text-[#D99904] mb-2">{subHeader}</p>
            <div className="w-[95%] md:w-[40%] mx-auto py-4 border-y-2 border-[#E8E8E8]">
            <p className="text-3xl font-semibold text-center">{header}</p>
            </div>
        </div>
    );
};

SectionTitle.propTypes={
    subHeader: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired
}

export default SectionTitle;