<template>
    <div class="contact-page container">
        <h1 class="center-text">Contact Me</h1>
        <p>You should get in touch</p>
        <p>
        Form provided via
        <a href="https://formspree.io">Formspree</a>
        </p>
        <form method="POST" action="https://formspree.io/emilyperegrine.dev@gmail.com">
            <div class="row">
                <div class="six columns">
                    <label for="email">Email:</label>
                    <input class="u-full-width" id="email" type="email" name="email" placeholder="Your email" required>
                </div>
                <div class="six columns">
                    <label for="subject">Subject:</label>
                    <input class="u-full-width" id="subject" type="text" name="subject" placeholder="Your subject" required>
                </div>
            </div>
            <div class="row">
                <label for="message">Message</label>
                <textarea class="u-full-width" id="message" name="message" placeholder="Test Message" required></textarea>
            </div>
            <div class="row">
                <button class="u-full-width" type="submit">Send Email</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>