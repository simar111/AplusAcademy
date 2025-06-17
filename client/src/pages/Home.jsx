import WhatsAppFloatingButton from "../components/Button";
import CourseSlider from "../components/CourseSlider";
import Hero from "../components/Hero";
import TestimonialsSection from "../components/Test";
import TopRankers from "../components/Top";
import WhyChooseUsAndTestimonials from "../components/WhyChoos";

export default function HomePage(){
return(
    <>
    <WhatsAppFloatingButton />
    <Hero />
    <CourseSlider />
    {/* <TestimonialsSection /> */}
    <TopRankers />
    <WhyChooseUsAndTestimonials />
    </>
)
}